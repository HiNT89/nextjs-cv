export type RequestSignup = {
  user_name: string;
  hashed_password: string;
  full_name: string | null;
  date_of_birth: string | null;
  email_address: string;
  phone_number: string | null;
  avatar: string | null;
  role_id: number | null;
  gender: number;
  type: number;
  ref_code_from_affiliate: string;
};

export type PayloadSignup = {
  email: string;
  password: string;
  full_name: string;
  referralCode: string;
};

export type PayloadSignin = {
  email: string;
  password: string;
};

export type RequestSignin = {
  username: string;
  password: string;
  type: number;
};

export type DataSignin = {
  access_token: string;
  refresh_token: string;
};

export interface DataGetMe {
  id: number;
  is_active: boolean;
  bs_code: string;
  created_at: string;
  updated_at: string;
  user_name: string;
  full_name: string;
  date_of_birth: string;
  email_address: string;
  phone_number: string;
  avatar: string;
  role: Role;
}

export interface Role {
  id: number;
  is_active: boolean;
  bs_code: string;
  created_at: string;
  updated_at: string;
  name: string;
  role_permission: RolePermission[];
}

export interface RolePermission {
  is_active: boolean;
  permission: Permission;
}

export interface Permission {
  id: number;
  bs_code: string;
  is_active: boolean;
  permission_name: string;
}
