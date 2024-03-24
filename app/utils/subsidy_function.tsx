export const checkSubsidyRequirement = (
  tenant: TenantForSubsidy,
  user: UserInputForSubsidy,
  subsidy: subsidyDataType
) => {
  let subsidyDetail: SubsidyDetail = {
    employee_subsidy: 0,
    office_subsidy: 0,
    rent_subsidy: 0,
  };
  if (
    // 雇用人数が超えている。

    (user.employee_new
      ? user.employee_new > subsidy.requirement.employee_new
      : false) &&
    (subsidy.requirement.area ? tenant.area > subsidy.requirement.area : true)
  ) {
    // } else {
    // 雇用補助の計算
    if (subsidy.subsidyDataType.employment.full_time > 0) {
      subsidyDetail.employee_subsidy +=
        subsidy.subsidyDataType.employment.full_time * (user.full_time ?? 0);
      console.log(
        "subsidy.subsidyDataType.employment.full_time",
        subsidy.subsidyDataType.employment.full_time
      );
      console.log("user.full_time", user.full_time);
      console.log(
        "subsidyDetail.employee_subsidy",
        subsidyDetail.employee_subsidy
      );
    }
    if (subsidy.subsidyDataType.employment.part_time > 0) {
      subsidyDetail.employee_subsidy +=
        subsidy.subsidyDataType.employment.part_time * (user.part_time ?? 0);
    }
    // 事務所補助の計算
    if (user.renovation && user.renovation > 0) {
      switch (user.office_size) {
        case "large":
          if (
            // 支給上限を超えていなければ、事務所補助を計算
            subsidy.subsidyDataType.office.large.amount >
            tenant.rent * subsidy.subsidyDataType.office.rate
          ) {
            subsidyDetail.office_subsidy =
              tenant.rent * subsidy.subsidyDataType.office.rate;
          } else if (
            // 支給上限を超えていれば、事務所補助を計算
            subsidy.subsidyDataType.office.large.amount <
            tenant.rent *
              subsidy.subsidyDataType.office.rate *
              subsidy.subsidyDataType.rent.time *
              12
          ) {
            subsidyDetail.office_subsidy =
              subsidy.subsidyDataType.office.large.amount;
          }
          // subsidyDetail.office_subsidy = subsidy.subsidy.office.large.amount;
          break;
        case "small":
          if (
            // 支給上限を超えていなければ、事務所補助を計算
            subsidy.subsidyDataType.office.small.amount >
            tenant.rent * subsidy.subsidyDataType.office.rate
          ) {
            subsidyDetail.office_subsidy =
              tenant.rent * subsidy.subsidyDataType.office.rate;
          } else if (
            // 支給上限を超えていれば、事務所補助を計算
            subsidy.subsidyDataType.office.small.amount <
            tenant.rent * subsidy.subsidyDataType.office.rate
          ) {
            subsidyDetail.office_subsidy =
              subsidy.subsidyDataType.office.small.amount;
          }
          break;
      }
    }

    // 家賃補助の計算
    switch (user.rent) {
      case "large":
        if (
          // 支給上限を超えていなければ、家賃補助を計算
          subsidy.subsidyDataType.rent.large.amount >
          tenant.rent * subsidy.subsidyDataType.rent.rate
        ) {
          subsidyDetail.rent_subsidy =
            tenant.rent *
            subsidy.subsidyDataType.rent.rate *
            subsidy.subsidyDataType.rent.time *
            12;
        } else if (
          // 支給上限を超えていれば、家賃補助を計算
          subsidy.subsidyDataType.rent.large.amount <
          tenant.rent * subsidy.subsidyDataType.rent.rate
        ) {
          subsidyDetail.rent_subsidy =
            subsidy.subsidyDataType.rent.large.amount;
        }
        break;
      case "small":
        if (
          // 支給上限を超えていなければ、家賃補助を計算
          subsidy.subsidyDataType.rent.small.amount >
          tenant.rent * subsidy.subsidyDataType.rent.rate
        ) {
          subsidyDetail.rent_subsidy =
            tenant.rent *
            subsidy.subsidyDataType.rent.rate *
            subsidy.subsidyDataType.rent.time *
            12;
        } else if (
          // 支給上限を超えていれば、家賃補助を計算
          subsidy.subsidyDataType.rent.small.amount <
          tenant.rent * subsidy.subsidyDataType.rent.rate
        ) {
          subsidyDetail.rent_subsidy =
            subsidy.subsidyDataType.rent.small.amount;
        }
        break;
    }
  }

  return subsidyDetail;
};

export type SubsidyDetail = {
  employee_subsidy: number;
  office_subsidy: number;
  rent_subsidy: number;
};

export type TenantForSubsidy = {
  rent: number;
  area: number;
  tenant_subsidy_city_id: string;
};

export type UserInputForSubsidy = {
  employee_new: number;
  full_time: number;
  part_time: number;
  renovation: number;
  office_size?: "null" | "small" | "large";
  rent?: "null" | "small" | "large";
};

export type subsidyDataType = {
  subsidy_city_id: string;
  requirement: {
    employee_new: number;
    area?: number;
  };
  subsidyDataType: {
    employment: {
      full_time: number;
      part_time: number;
      title: string;
    };
    office: {
      large: {
        amount: number;
        description: string;
      };
      small: {
        amount: number;
        description: string;
      };
      rate: number;
      title: string;
    };
    rent: {
      large: {
        amount: number;
        description: string;
      };
      small: {
        amount: number;
        description: string;
      };
      rate: number;
      time: number;
      title: string;
    };
  };
};
