const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const newPot of this.potions) {
      if (newPot.name === newPotion.name) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const delName = this.potions.indexOf(potionName);
    for (const name of this.potions) {
      console.log(name);
    }
    //   const potionIndex = this.potions.indexOf(potionName);

    //   if (potionIndex === -1) {
    //     return `Potion ${potionName} is not in inventory!`;
    //   }

    //   this.potions.splice(potionIndex, 1);
    },
    updatePotionName(oldName, newName) {
      const potionIndex = this.potions.indexOf(oldName);

      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }

      this.potions.splice(potionIndex, 1, newName);
    },
    // Change code above this line
  };

  console.log(atTheOldToad.getPotions());

  atTheOldToad.addPotion({ name: "Dragon breath", price: 620 })

console.log(atTheOldToad.getPotions());
  
  atTheOldToad.removePotion("Dragon breath");
