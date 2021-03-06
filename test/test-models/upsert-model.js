'use strict';

module.exports = function (sequelize) {
    const DataTypes = sequelize.Sequelize;

    const attributes = {
        // some string id
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

        naturalId: { type: DataTypes.STRING, allowNull: false, unique: 'naturalId' },

        // a data field representing a name eg. 'Bar'
        name: DataTypes.STRING
    };

    const options = {
        tableName: 'upsert_model',
        timestamps: false
    };

    return sequelize.define('UpsertModel', attributes, options);
};