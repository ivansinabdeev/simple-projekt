export function markupExercisesCard(array) {
  const exercisesCard = array
    .map(({ name, filter, imgUrl }) => {
      `<li>
    <img src="${imgUrl}" alt="${filter}, ${name}">
    <h3>${name}</h3>
    <p>${filter}</p>
</li>`;
    })
    .join('');
  return exercisesCard;
}
