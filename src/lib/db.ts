/**
 * @file less-api  database
 */
import { MongoAccessor, getDb } from 'less-api'
import Config from '../config'

const accessor = new MongoAccessor(Config.db.database, Config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// const context = new Entry(accessor)
// context.logger.level = 5
accessor.init()

// 获取 db 对象
const db = getDb(accessor)

// export
export {
    db,
    accessor
}