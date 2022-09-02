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
        return `Error! Potion ${newPotion.name} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i++) {
      const item = this.potions[i];
      if (item.name === potionName) {
        this.potions.splice(i, 1);
        return
      }
    }
    return `Potion ${potionName.name} is not in inventory!`;
  },
  
  updatePotionName(oldName, newName) {
    for (const upd of this.potions) {
      if (upd.name === oldName) {
        upd.name = newName;
        return
      }
    }
    return `Potion ${oldName} is not in inventory!`;
    // const potionIndex = this.potions.indexOf(oldName);

    // if (potionIndex === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }

    // this.potions.splice(potionIndex, 1, newName);
  },
};


// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));
// atTheOldToad.addPotion({ name: "Stone skin", price: 240 });
// console.log(atTheOldToad.getPotions());



  // console.log(atTheOldToad.getPotions());

  // atTheOldToad.addPotion({ name: "Dragon breath", price: 620 })

// console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.removePotion("Dragons breath"));
atTheOldToad.removePotion("Dragon breath");
  console.log(atTheOldToad.getPotions());

// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// console.log(atTheOldToad.getPotions());
