function Option({ doc, time }) {
  return (
    <option
      value={time}
      disabled={doc?.[time]}
      className={`${doc?.[time] ? "bg-gray-200 " : ""} `}
    >{` ساعت  ${time}   ${doc?.[time] ? " (رزرو شده ) " : ""}`}</option>
  );
}

export default Option;
