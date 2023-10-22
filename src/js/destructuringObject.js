function extractSpecialAttacks({ special }) {
  return special.map((specialAtack) => {
    const {
      id, name, description, icon,
    } = specialAtack;
    return {
      id,
      name,
      description: description || 'Описание недоступно',
      icon,
    };
  });
}

export default extractSpecialAttacks;
