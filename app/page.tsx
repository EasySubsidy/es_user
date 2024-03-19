"use client";

import { Header } from "./ui/Header";
import { TagBar } from "./ui/TagBar.tsx";
import { Banner } from "./ui/Banner";
import { MainContent } from "./ui/MainContent";
import { TenantsProvider } from "@/app/context";

const Home = () => {
  const [user, setUser] = useState<User | null>(null);

  // const toast = useToast();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, [auth]);
  return (
    <TenantsProvider>
      <main
        // className="flex min-h-screen flex-col items-center justify-between p-24"
        className="flex min-h-screen flex-col items-center"
        style={{
          backgroundColor: "#ffffff",
        }}
      >
        <Header />
        <TagBar />
        <Banner />
        <MainContent />
      </main>
    </TenantsProvider>
  );
};

export default Home;
