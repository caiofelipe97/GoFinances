const formatDate = (created_at: Date): string => {
  const date = new Date(created_at);
  return date.toLocaleString().split(' ')[0];
};

export default formatDate;
