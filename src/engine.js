export default class BucketRepo {
  buckets = {}

  static isGoodBucketName(bName) {
    return /^-_[a-z0-9]+$/i.test(bName)
  }

  static newBucket(bName) {
    const now = Date.now()
    return {
      name: bName,
      timestamp: { created: now, modify: now },
      objects: {}
    }
  }

  //create upload ticket
  static newObject(oName) {
    const now = Date.now()
    return {
      name: oName,
      meta: {},
      status: 'pending',
      timestamp: {created: now, modify: now},
      parts: {} //part number => part
    }
  }

  async createBucket(bName) {
    const bucket = this.newBucket(bName)
    if (!(bName in this.buckets)) {
      this.buckets[bName] = bucket
      return {
        result: 'ok',
        data: bucket.meta
      }
    } else {
      return {
        result: 'error'
      }
    }
  }

  async dropBucket(bName) {
    if (bName in this.buckets) {
      delete this.buckets[bName]
      return {
        result: 'ok'
      }
    } else {
      return {
        result: 'error'
      }
    }
  }

  async listBucket(bName) {
    if (bName in this.buckets) {
      const bucket = this.buckets[bName]
      return {
        result: 'ok',
        data: {
          ...bucket.meta,
          objects: bucket.objects.map(x => ({
            ...x.timestamp, name: x.name
          }))
        }
      }
    } else {
      return {
        result: 'error'
      }
    }
  }
  ///....
}
