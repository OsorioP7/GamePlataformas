export function generateItems() {

  const items = [];

  for (let i = 1; i <= 100; i++) {
    items.push({
      name: `Videojuego ${i}`,
      image: `https://picsum.photos/200/300?random=${i}`
    });
  }

  return items;

}