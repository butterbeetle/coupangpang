import Message from "../NormalReq/Message";
import Alarm from "./Alarm/Alarm";
import Button from "./Button";
import Receive from "./Receive/Receive";

const DawnReq = () => {
  return (
    <main>
      <Message />
      <Receive />
      <Alarm />
      <Button />
    </main>
  );
};

export default DawnReq;
