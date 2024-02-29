import mockedFiles from "./File.mock";
import mockedSharedUrls from "./SharedUrl.mock";

const mockedFileSharedUrls = [
  {
    id: "a1b2-c3d4-e5f6-g7h8",
    file: mockedFiles[0],
    sharedUrl: mockedSharedUrls[0],
  },
  {
    id: "b2c3-d4e5-f6g7-h8i9",
    file: mockedFiles[1],
    sharedUrl: mockedSharedUrls[1],
  },
  {
    id: "c3d4-e5f6-g7h8-i9j0",
    file: mockedFiles[2],
    sharedUrl: mockedSharedUrls[2],
  },
];

export default mockedFileSharedUrls;
