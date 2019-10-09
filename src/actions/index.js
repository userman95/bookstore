export const createBook = (book) => {
  if (!book.id) book.id = Math.floor((Math.random() * 100) + 1);
  return { type: 'CREATE_BOOK', book };
};

export const removeBook = (id) => ({ type: 'REMOVE_BOOK', id });
