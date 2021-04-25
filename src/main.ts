import * as core from '@actions/core'
import {platform} from 'process'
import * as fs from 'fs'
import * as path from 'path'
import got from 'got'
import {promisify} from 'util'
import stream from 'stream'

async function run(): Promise<void> {
  try {
    const version = core.getInput('version')
    const installPath = core.getInput('path')
    await fs.promises.mkdir(path.dirname(installPath), {
      recursive: true
    })
    const url = `https://github.com/suzuki-shunsuke/akoi/releases/download/${version}/akoi_${version.replace(
      /^v/,
      ''
    )}_${platform}_amd64`
    core.info(`url: ${url}`)
    const pipeline = promisify(stream.pipeline)
    await pipeline(got.stream(url), fs.createWriteStream(installPath))
    await fs.promises.chmod(installPath, 0o775)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
