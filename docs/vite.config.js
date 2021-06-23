
import path from 'path'

export default{
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src'),
      '@demos': path.resolve(__dirname, '../src/demos'),
    },
  }
}