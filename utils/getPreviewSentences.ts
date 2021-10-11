const getPreviewSentences = (post) => {
  const array = post.text.split(". ");
  return array[0].concat(". ") + array[1].concat(".");
};

export default getPreviewSentences;
