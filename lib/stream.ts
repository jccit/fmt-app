export async function streamToArray(stream: ReadableStream<Uint8Array>): Promise<Uint8Array> {
  const reader = stream.getReader();

  let finish = false;
  let array = new Uint8Array();

  while(!finish) {
    const { done, value } = await reader.read();
    if (done) {
      finish = true;
    } else if (value) {
      array = new Uint8Array([...array, ...value]);
    }
  }

  reader.releaseLock();

  return array;
}
