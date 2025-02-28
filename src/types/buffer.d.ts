/// <reference types="node" />

// This ensures the Buffer type from Node.js is available
declare global {
  const Buffer: typeof import("buffer").Buffer;
}
