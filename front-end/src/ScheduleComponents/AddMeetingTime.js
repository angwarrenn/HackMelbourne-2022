import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function AddMeetTime() {
  const [responses, setResponses] = useState([
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
    { count: 0 },
  ]);
  const [socket, setSocket] = useState(null);

  const [count, setCount] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const [self, setSelf] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  useEffect(() => {
    console.log("useEffect called");

    const ENDPOINT = process.env.REACT_APP_SERVER;
    const socket = io(ENDPOINT, {
      query: { id: "9eab9fd0-4f39-4d97-88a6-3013c151c7a3" },
    });

    if (socket) {
      setSocket(socket);

      socket.emit("init");

      socket.on("update", (data) => {
        console.log(data.result);
        setResponses(data.result);
      });
    }
  }, []);

  useEffect(() => {
    setCount([]);
    for (let i = 0; i < 24; i++) {
      setCount((prev) => [...prev, responses[i].count]);
    }
  }, [responses]);

  const handler = (i) => {
    let idk = [...self];

    if (idk[i] == 0) {
      socket.emit("vote", { time: i });
      idk[i] = 1;
      setSelf(idk);
    } else {
      socket.emit("remove-vote", { time: i });
      idk[i] = 0;
      setSelf(idk);
    }
  };

  const loop = () => {
    let arr = [];

    for (let i = 0; i < 24; i++) {
      const style = { backgroundColor: "orange", opacity: 0.1 * count[i] };

      arr.push(
        <tr>
          <td>{i}:00</td>
          <td
            style={{ backgroundColor: "orange", opacity: 0.5 * self[i] }}
            onClick={() => {
              handler(i);
            }}
          ></td>
          <td>{i}:00</td>
          <td style={style}></td>
        </tr>
      );
    }

    return arr;
  };

  return (
    <div className="meettime">
      <table>
        <tr>
          <th colSpan="2">You</th>
          <th colSpan="4">Group</th>
        </tr>
        {loop()}
      </table>
    </div>
  );
}
