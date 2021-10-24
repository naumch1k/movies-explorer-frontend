const convertDuration = (durationInMinutes) => {
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = Math.floor(durationInMinutes % 60);

  if (hours >= 1) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
}
  
export default convertDuration;
