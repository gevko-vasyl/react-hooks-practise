import React from "react";

export default function Timer({ time }) {
  return <div>{new Date(time * 1000).toISOString().substr(11, 8)}</div>;
}
