import { Room } from "types/types";

export const fetchRooms = async (): Promise<Room[]> => {
  const response = await fetch(process.env.BASE_URL + "/api/getRooms");
  const { rooms }: { rooms: Room[] } = await response.json();

  return rooms;
};
