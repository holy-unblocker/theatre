# Theatre Repository Instructions

## Database is the Authoritative Source of Truth
- `theatre/games.json` is **NOT** the source of truth and never was. Do not treat `games.json` as authoritative catalog data or schema definition.
- The authoritative source of truth for Holy Unblocker games and media catalog is the **PostgreSQL database (`holy`) deployed on the production server `holy`** (`table: theatre`).
- Any updates, game entries, ID mappings, media paths, and metadata definitions must be represented in and synchronized with the PostgreSQL database on server `holy`.
