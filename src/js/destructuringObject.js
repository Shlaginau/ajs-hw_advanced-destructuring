function extractSpecialAttacks({ special }) {
  return special.map((specialAtack) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = specialAtack;
    return {
      id,
      name,
      description,
      icon,
    };
  });
}

export default extractSpecialAttacks;

/* function extractSpecialAttacks({ special }) {
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
      } */
