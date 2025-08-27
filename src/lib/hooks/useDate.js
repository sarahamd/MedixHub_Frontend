const useDate = () => {
  function getDate(createdAt) {
    const date = new Date(createdAt?.seconds * 1000);
    const formattedDate = date?.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      // hour: 'numeric',
      // minute: 'numeric'
      // second: 'numeric',
      // timeZoneName: 'short'
    });
    return formattedDate;
  }
  return { getDate };
};

export default useDate;
