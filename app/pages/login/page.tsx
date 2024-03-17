"use client";
import { app } from "@/app/lib/firebase/firebase";
import {
  Box,
  Button,
  Center,
  chakra,
  Container,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Spacer,
  useToast,
} from "@chakra-ui/react";
import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  User,
} from "firebase/auth";
import { FormEvent, useState, useEffect } from "react";

//TODO 現状ログイン機能しかないので情報を登録できるようにする

export const Page = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const toast = useToast();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);
      setEmail("");
      setPassword("");
      toast({
        title: "確認メールを送信しました。",
        status: "success",
        position: "top",
      });
    } catch (e) {
      toast({
        title: "エラーが発生しました。",
        status: "error",
        position: "top",
      });
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container py={14}>
      <Heading>サインアップ</Heading>
      <chakra.form onSubmit={handleSubmit}>
        <Spacer height={8} aria-hidden />
        <Grid gap={4}>
          <Box display={"contents"}>
            <FormControl>
              <FormLabel>メールアドレス</FormLabel>
              <Input
                type={"email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  color: "black",
                }}
              />
            </FormControl>
            <FormControl>
              <FormLabel>パスワード</FormLabel>
              <Input
                type={"password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  color: "black",
                }}
              />
            </FormControl>
          </Box>
        </Grid>
        <Spacer height={4} aria-hidden />
        <Center>
          <Button type={"submit"} isLoading={isLoading}>
            アカウントを作成
          </Button>
        </Center>
      </chakra.form>
      <Center mt={4}>
        {user ? (
          <div>ログイン状態です: {user.email}</div>
        ) : (
          <div>ログアウト状態です</div>
        )}
      </Center>
    </Container>
  );
};

export default Page;
