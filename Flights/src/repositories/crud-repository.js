const { customFormate } = require("../config/logger-config");

class CrudRepository {
  constructor(model) {
    this.model = model;
  }

 
  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      customFormate.error("Error creating data:", error.message);
      throw error;
    }
  }

  
  async findById(id) {
    try {
      const response = await this.model.findByPk(id);
      if (!response) {
        customFormate.error(`Record with ID ${id} not found`);
        return null;
      }
      return response;
    } catch (error) {
      customFormate.error("Error fetching data by ID:", error.message);
      throw error;
    }
  }

 
  async findAll() {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      customFormate.error("Error fetching all data:", error.message);
      throw error;
    }
  }

 
  async update(id, data) {
    try {
      const record = await this.model.findByPk(id);
      if (!record) {
        customFormate.error(`Record with ID ${id} not found for update`);
        return null;
      }
      const updatedRecord = await record.update(data);
      return updatedRecord;
    } catch (error) {
      customFormate.error(`Error updating record with ID ${id}:`, error.message);
      throw error;
    }
  }

  
  async delete(id) {
    try {
      const deleted = await this.model.destroy({ where: { id } });
      if (!deleted) {
        customFormate.error(`Record with ID ${id} not found for deletion`);
        return null;
      }
      return deleted;
    } catch (error) {
      customFormate.error(`Error deleting record with ID ${id}:`, error.message);
      throw error;
    }
  }
}

module.exports = CrudRepository;
