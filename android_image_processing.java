   @RequiresApi(api = Build.VERSION_CODES.Q)
    public Bitmap convertToGrayScale(Bitmap image){
        Bitmap bitmap = image.copy(image.getConfig(), true);
        for(int i=0;i<bitmap.getWidth();i++){
            for(int j=0;j<bitmap.getHeight();j++){
                   Color c= bitmap.getColor(i,j);
                   float green=c.green();
                   float red=c.red();
                   float blue=c.blue();
                   float grayScale=(green+red+blue)/3;
                    int newColor=Color.argb(c.alpha(),grayScale,grayScale,grayScale);
                   bitmap.setPixel(i,j,newColor);
            }
        }
    return bitmap;
    }
