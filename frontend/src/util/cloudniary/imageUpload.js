import axios from 'axios'

export const imageUpload = async (pics) => {
  if (pics.type == 'image/jpeg' || pics.type == 'image/png') {
    const formData = new FormData()
    formData.append('file', pics)
    formData.append('upload_preset', 'gurupriyan')
    formData.append('cloud_name', 'dhefb71oh')
    const { data } = await axios.post(
      'https://api.cloudinary.com/v1_1/dhefb71oh/image/upload',
      formData,
    )
    if (data) {
      return data
    } else {
      return console.log('picture not uploaded')
    }
  }else{
    alert("format not supported")
  }
}
