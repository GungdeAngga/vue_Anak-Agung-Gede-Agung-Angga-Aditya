import { penjumlahan, pengurangan, pembagian, perkalian, rata_rata, pembagian_sisa, luas_kubus, luas_lingkaran, luas_persegi, volume_kubus } from "@/utils/operations.js";

describe("Melakukan Penjumlahan", () => {
  test("Penjumlahan dua bilangan positif", () => {
    expect(penjumlahan(2, 4)).toBe(6);
  });
  test("Penjumlahan dua bilangan negatif", () => {
    expect(penjumlahan(-10, -2)).toBe(-12);
  });
});

describe("Melakukan pengurangan", () => {
  test("pengurangan dua bilangan positif", () => {
    expect(pengurangan(4, 2)).toBe(2);
  });
  test("pengurangan dua bilangan negatif", () => {
    expect(pengurangan(-10, -2)).toBe(-8);
  });
});

describe("Melakukan pembagian", () => {
  test("pembagian dua bilangan positif", () => {
    expect(pembagian(4, 2)).toBe(2);
  });
  test("pembagian dua bilangan negatif", () => {
    expect(pembagian(-10, -2)).toBe(5);
  });
});

describe("Melakukan perkalian", () => {
  test("perkalian dua bilangan positif", () => {
    expect(perkalian(4, 2)).toBe(8);
  });
  test("perkalian dua bilangan negatif", () => {
    expect(perkalian(-10, -2)).toBe(20);
  });
});

describe("Melakukan rata_rata", () => {
  test("rata_rata dua bilangan positif", () => {
    expect(rata_rata(10, 10, 10, 30, 3)).toBe(10);
  });
});

describe("Melakukan pembagian sisa", () => {
  test("pembagian sisa dua bilangan positif", () => {
    expect(pembagian_sisa(10, 3)).toBe(3);
  });
});

describe("Melakukan luas persegi", () => {
  test("luas persegi dua bilangan positif", () => {
    expect(luas_persegi(4, 4)).toBe(16);
  });
});

describe("Melakukan luas luas lingkaran", () => {
  test("luas luas lingkaran dua bilangan positif", () => {
    expect(luas_lingkaran(3.14, 10, 10)).toBe(314);
  });
});

describe("Melakukan luas kuluas kubus", () => {
  test("luas kuluas kubus dua bilangan positif", () => {
    expect(luas_kubus(6, 4, 4)).toBe(96);
  });
});

describe("Melakukan volume kubus", () => {
  test("volume kubus dua bilangan positif", () => {
    expect(volume_kubus(4, 4, 4)).toBe(64);
  });
});