export const formatDate = (date) => {
    if (!date) return ''; // or any default value you prefer
    return new Date(date).toLocaleDateString();
  };
  
  export const formatNumber = (number) => {
    if (number === undefined || number === null) return ''; // or any default value you prefer
    return number.toLocaleString();
  };

