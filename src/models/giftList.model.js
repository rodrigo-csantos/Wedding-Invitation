const giftListModel = (sequelize, DataTypes) => {
    const giftList = sequelize.define('giftList', {
        idGift: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
        giftName: DataTypes.STRING,  
        selected: DataTypes.BOOLEAN, 
        idImage: DataTypes.INTEGER, 
        giftGiver: DataTypes.STRING
    }, {
        timestamps: false
    })

    return giftList
}

module.exports = giftListModel