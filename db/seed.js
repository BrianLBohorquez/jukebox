import db from "#db/client";
import { createTrack } from "#db/queries/tracks";
import { createPlaylist } from "#db/queries/playlists";
import { createPlaylistTrack } from "#db/queries/playlists_tracks";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  for (let i = 1; i <= 20; i++) {
    await createTrack("Track " + i, i * 10000);
  }

  for (let i = 1; i <= 10; i++) {
    await createPlaylist("Playlist " + i, "Description for playlist " + i);
  }

  for (let i = 1; i <= 10; i++) {
    await createPlaylistTrack(i, i);
    await createPlaylistTrack(i, i + 10);
  }
}
