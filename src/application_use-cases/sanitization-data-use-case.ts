export function isValidEmail(email: string): boolean {
  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
}

export function clearEmail(email:string):string{
    return email.trim()
}
export function clearPassowrd(password:string):string{
    return password.trim()
}