class FakeDB {
  data = {
    a: 'aaaa',
    b: 'bbbb'
  }

  getData(key){
    return this.data[key]
  }

  putData(key, val){
    this.data[key] = val
  }
}


async function initDB() {
  //init db and pass it here
  const db = new FakeDB()
  return db
}

export default initDB