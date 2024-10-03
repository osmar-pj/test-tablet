System.register(["./index-legacy-D5g4H_Qi.js"],(function(e,t){"use strict";var s;return{setters:[e=>{s=e.W}],execute:function(){e("CapacitorSQLiteWeb",class extends s{constructor(){super(...arguments),this.jeepSqliteElement=null,this.isWebStoreOpen=!1}async initWebStore(){await customElements.whenDefined("jeep-sqlite"),this.jeepSqliteElement=document.querySelector("jeep-sqlite"),this.ensureJeepSqliteIsAvailable(),this.jeepSqliteElement.addEventListener("jeepSqliteImportProgress",(e=>{this.notifyListeners("sqliteImportProgressEvent",e.detail)})),this.jeepSqliteElement.addEventListener("jeepSqliteExportProgress",(e=>{this.notifyListeners("sqliteExportProgressEvent",e.detail)})),this.jeepSqliteElement.addEventListener("jeepSqliteHTTPRequestEnded",(e=>{this.notifyListeners("sqliteHTTPRequestEndedEvent",e.detail)})),this.jeepSqliteElement.addEventListener("jeepSqlitePickDatabaseEnded",(e=>{this.notifyListeners("sqlitePickDatabaseEndedEvent",e.detail)})),this.jeepSqliteElement.addEventListener("jeepSqliteSaveDatabaseToDisk",(e=>{this.notifyListeners("sqliteSaveDatabaseToDiskEvent",e.detail)})),this.isWebStoreOpen||(this.isWebStoreOpen=await this.jeepSqliteElement.isStoreOpen())}async saveToStore(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.saveToStore(e))}catch(t){throw new Error(`${t}`)}}async getFromLocalDiskToStore(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.getFromLocalDiskToStore(e))}catch(t){throw new Error(`${t}`)}}async saveToLocalDisk(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.saveToLocalDisk(e))}catch(t){throw new Error(`${t}`)}}async echo(e){return this.ensureJeepSqliteIsAvailable(),await this.jeepSqliteElement.echo(e)}async createConnection(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.createConnection(e))}catch(t){throw new Error(`${t}`)}}async open(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.open(e))}catch(t){throw new Error(`${t}`)}}async closeConnection(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.closeConnection(e))}catch(t){throw new Error(`${t}`)}}async getVersion(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.getVersion(e)}catch(t){throw new Error(`${t}`)}}async checkConnectionsConsistency(e){this.ensureJeepSqliteIsAvailable();try{return await this.jeepSqliteElement.checkConnectionsConsistency(e)}catch(t){throw new Error(`${t}`)}}async close(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.close(e))}catch(t){throw new Error(`${t}`)}}async beginTransaction(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.beginTransaction(e)}catch(t){throw new Error(`${t}`)}}async commitTransaction(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.commitTransaction(e)}catch(t){throw new Error(`${t}`)}}async rollbackTransaction(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.rollbackTransaction(e)}catch(t){throw new Error(`${t}`)}}async isTransactionActive(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isTransactionActive(e)}catch(t){throw new Error(`${t}`)}}async getTableList(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.getTableList(e)}catch(t){throw new Error(`${t}`)}}async execute(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.execute(e)}catch(t){throw new Error(`${t}`)}}async executeSet(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.executeSet(e)}catch(t){throw new Error(`${t}`)}}async run(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.run(e)}catch(t){throw new Error(`${t}`)}}async query(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.query(e)}catch(t){throw new Error(`${t}`)}}async isDBExists(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isDBExists(e)}catch(t){throw new Error(`${t}`)}}async isDBOpen(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isDBOpen(e)}catch(t){throw new Error(`${t}`)}}async isDatabase(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isDatabase(e)}catch(t){throw new Error(`${t}`)}}async isTableExists(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isTableExists(e)}catch(t){throw new Error(`${t}`)}}async deleteDatabase(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.deleteDatabase(e))}catch(t){throw new Error(`${t}`)}}async isJsonValid(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.isJsonValid(e)}catch(t){throw new Error(`${t}`)}}async importFromJson(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.importFromJson(e)}catch(t){throw new Error(`${t}`)}}async exportToJson(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.exportToJson(e)}catch(t){throw new Error(`${t}`)}}async createSyncTable(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.createSyncTable(e)}catch(t){throw new Error(`${t}`)}}async setSyncDate(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.setSyncDate(e))}catch(t){throw new Error(`${t}`)}}async getSyncDate(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.getSyncDate(e)}catch(t){throw new Error(`${t}`)}}async deleteExportedRows(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.deleteExportedRows(e))}catch(t){throw new Error(`${t}`)}}async addUpgradeStatement(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.addUpgradeStatement(e))}catch(t){throw new Error(`${t}`)}}async copyFromAssets(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.copyFromAssets(e))}catch(t){throw new Error(`${t}`)}}async getFromHTTPRequest(e){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return void(await this.jeepSqliteElement.getFromHTTPRequest(e))}catch(t){throw new Error(`${t}`)}}async getDatabaseList(){this.ensureJeepSqliteIsAvailable(),this.ensureWebstoreIsOpen();try{return await this.jeepSqliteElement.getDatabaseList()}catch(e){throw new Error(`${e}`)}}ensureJeepSqliteIsAvailable(){if(null===this.jeepSqliteElement)throw new Error("The jeep-sqlite element is not present in the DOM! Please check the @capacitor-community/sqlite documentation for instructions regarding the web platform.")}ensureWebstoreIsOpen(){if(!this.isWebStoreOpen)throw new Error('WebStore is not open yet. You have to call "initWebStore()" first.')}async getUrl(){throw this.unimplemented("Not implemented on web.")}async getMigratableDbList(e){throw console.log("getMigratableDbList",e),this.unimplemented("Not implemented on web.")}async addSQLiteSuffix(e){throw console.log("addSQLiteSuffix",e),this.unimplemented("Not implemented on web.")}async deleteOldDatabases(e){throw console.log("deleteOldDatabases",e),this.unimplemented("Not implemented on web.")}async moveDatabasesAndAddSuffix(e){throw console.log("moveDatabasesAndAddSuffix",e),this.unimplemented("Not implemented on web.")}async isSecretStored(){throw this.unimplemented("Not implemented on web.")}async setEncryptionSecret(e){throw console.log("setEncryptionSecret",e),this.unimplemented("Not implemented on web.")}async changeEncryptionSecret(e){throw console.log("changeEncryptionSecret",e),this.unimplemented("Not implemented on web.")}async clearEncryptionSecret(){throw console.log("clearEncryptionSecret"),this.unimplemented("Not implemented on web.")}async checkEncryptionSecret(e){throw console.log("checkEncryptionPassPhrase",e),this.unimplemented("Not implemented on web.")}async getNCDatabasePath(e){throw console.log("getNCDatabasePath",e),this.unimplemented("Not implemented on web.")}async createNCConnection(e){throw console.log("createNCConnection",e),this.unimplemented("Not implemented on web.")}async closeNCConnection(e){throw console.log("closeNCConnection",e),this.unimplemented("Not implemented on web.")}async isNCDatabase(e){throw console.log("isNCDatabase",e),this.unimplemented("Not implemented on web.")}async isDatabaseEncrypted(e){throw console.log("isDatabaseEncrypted",e),this.unimplemented("Not implemented on web.")}async isInConfigEncryption(){throw this.unimplemented("Not implemented on web.")}async isInConfigBiometricAuth(){throw this.unimplemented("Not implemented on web.")}async loadExtension(e){throw console.log("loadExtension",e),this.unimplemented("Not implemented on web.")}async enableLoadExtension(e){throw console.log("enableLoadExtension",e),this.unimplemented("Not implemented on web.")}})}}}));
