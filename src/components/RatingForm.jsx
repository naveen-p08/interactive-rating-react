function RatingForm() {
  const length = 5;
  let buttonMap = Array.from({ length: length }, (_, index) => index + 1);

  return (
    <form>
      {buttonMap.map((button, index) => {
        return <button key={index}>{button}</button>;
      })}

      <button type={"submit"}>submit</button>
    </form>
  );
}

export default RatingForm;
