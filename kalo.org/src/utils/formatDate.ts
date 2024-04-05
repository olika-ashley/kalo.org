const formatDate = (datetime: string) => {
    const date = new Date(datetime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const period = hours >= 12 ? 'pm' : 'am';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if minutes < 10
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
  
    return `${formattedHours}:${formattedMinutes}${period} | ${month}-${day}/${month}${year}`;
  };

  export default formatDate;