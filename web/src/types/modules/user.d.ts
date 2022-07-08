type UserId = number;
type UserRole = "HOST" | "USER";

interface User {
  id: UserId;

  createdTs: TimeStamp;
  updatedTs: TimeStamp;
  rowStatus: RowStatus;

  role: UserRole;
  email: string;
  name: string;
  openId: string;
}

interface UserCreate {
  email: string;
  password: string;
  name: string;
  role: UserRole;
}

interface UserPatch {
  name?: string;
  password?: string;
  resetOpenId?: boolean;
}
