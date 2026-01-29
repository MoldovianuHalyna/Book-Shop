export type ValidationSchema<T extends Record<string, unknown>> = {
  [K in keyof T]: (value: string) => string | undefined;
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type BookClubValues = {
  name: string;
  email: string;
};

export const validationSchema: ValidationSchema<BookClubValues> = {
  name: (value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return "Name is required";
    }
    if (trimmed.length < 2) {
      return "Name must be at least 2 characters";
    }
    return undefined;
  },
  email: (value) => {
    const trimmed = value.trim();
    if (!trimmed) {
      return "Email is required";
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      return "Please enter a valid email address";
    }
    return undefined;
  },
};
