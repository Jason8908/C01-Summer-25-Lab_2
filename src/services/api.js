export const ApiService = (() => {
  const module = {};
  const baseUrl = 'https://dog.ceo/api';
  const endpoints = {
    dogBreeds: 'breeds/list/all',
    breedImages: (breed) => `breed/${breed}/images`,
  };
  const mockBreeds = {
    'bulldog': [],
    'labrador': []
  }
  const mockImages = {
    'bulldog': [
      "https://images.dog.ceo/breeds/bulldog-boston/20200710_175933.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/20200710_175944.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10380.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10452.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10596.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10604.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_1069.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10734.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10768.jpg",
      "https://images.dog.ceo/breeds/bulldog-boston/n02096585_10823.jpg"
    ],
    'labrador': [
      "https://images.dog.ceo/breeds/labrador/Fury_01.jpg",
      "https://images.dog.ceo/breeds/labrador/Fury_02.jpg",
      "https://images.dog.ceo/breeds/labrador/IMG_2397.jpg",
      "https://images.dog.ceo/breeds/labrador/IMG_2752.jpg",
      "https://images.dog.ceo/breeds/labrador/IMG_4708.jpg",
      "https://images.dog.ceo/breeds/labrador/IMG_4709.jpg",
      "https://images.dog.ceo/breeds/labrador/JessieIncognito.jpg",
      "https://images.dog.ceo/breeds/labrador/Lucy.jpg",
      "https://images.dog.ceo/breeds/labrador/Luke.jpg"
    ]
  };

  module.getAllBreeds = async () => {
    // Change this in your final implementation
    return mockBreeds;
  }

  module.getDogsByBreed = async (breed, limit = 9) => {
    // Change this in your final implementation
    return mockImages[breed].slice(0, limit);
  }

  return module;
})();