export default class HttpsReq {
    constructor(url) {
      this.url = "http://localhost:4000";
    }

    /*Servicio de Obtención*/
    async getAll(endpoint) {
        try {
            const response = await fetch(`${this.url}/${endpoint}`);
            const data = await response.json();
            return data;
        } catch(err) {
            return `Algo salió mal GET :( --> ${err}`
        }
    }
  
    /*Servicio de Creación*/
  
    async postRecord(rec, endpoint) {
        try {
            const response = await fetch(`${this.url}/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: rec,
              });
              const data = await response.json();
              return data
        } catch(err) {
            console.error(`Algo salió mal POST :( --> ${err}`)
        }    
    }
      
  
    /*Servicio de Actualización*/
    async updateRecord(rec, endpoint) {
      try {
        const response = await fetch(`${this.url}/${endpoint}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: rec,
        });
        const data = await response.json();
        return data

      } catch(err) {
        console.error("Algo salió mal UPDATE :(", " -->", err);
      }
    }
  
    /*Servicio de Borrado*/
    async deleteRec(recId, endpoint) {
      try {
        const response = await fetch(`${this.url}/${endpoint}/${recId}`, {
          method: "DELETE",
        });
        const data = response.json();
        const ui = new UI();
        console.log(bookId);
        console.log(data);
        ui.renderGet();
      } catch {
        console.log("Algo salio mal DELETE");
      }
    }
  
    async deleteAllService() {
      try {
        const response = await fetch(`${this.url}`, {
          method: "DELETE",
        });
        const data = response.json();
        console.log(data);
        console.log("Se ejecuto AllDelete")
        
      } catch {
        console.log("Algo salio mal, no te preocupes, lo resolverás");
      }
    }
  }