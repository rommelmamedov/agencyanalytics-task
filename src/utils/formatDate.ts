export const formatDate = (dateString: string) => {
  const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return formatter.format(new Date(dateString));
};
