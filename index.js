console.log(process.argv); //wyświetli ścieżki do node i pliku który uruchamiamy a dalej argumenty

const sayHi = (name = "") => {
  const args = process.argv.splice(2); //przekazujemy tablicę tylko przekazanych zmiennych
  args.forEach((arg) => {
    console.log(arg.split("="));
    const arr = arg.split("=");
    if (arr[0] === "name") {
      name = arr[1];
    }
    console.log(`Cześć ${name} !`);
  });
};

sayHi();
