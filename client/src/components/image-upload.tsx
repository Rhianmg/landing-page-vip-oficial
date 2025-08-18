import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, Image as ImageIcon, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function ImageUpload() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      
      // Create preview URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);

      toast({
        title: "Imagem enviada com sucesso!",
        description: "Sua imagem foi carregada e está pronta para uso.",
      });
    } catch (error) {
      toast({
        title: "Erro no upload",
        description: "Não foi possível fazer o upload da imagem. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const removeImage = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
      setUploadedImage(null);
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-white mb-2">
              Upload de Imagem
            </h2>
            <p className="text-gray-300">
              Faça o upload de uma imagem para personalizar sua experiência
            </p>
          </div>

          {!uploadedImage ? (
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
                isDragActive
                  ? 'border-yellow-400 bg-yellow-400/10'
                  : 'border-gray-500 hover:border-gray-400 bg-gray-800/50'
              }`}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center space-y-4">
                <Upload className="h-12 w-12 text-gray-400" />
                <div>
                  <p className="text-white font-semibold mb-1">
                    {isDragActive
                      ? 'Solte a imagem aqui...'
                      : 'Arraste uma imagem ou clique para selecionar'}
                  </p>
                  <p className="text-gray-400 text-sm">
                    PNG, JPG, GIF até 5MB
                  </p>
                </div>
                {isUploading && (
                  <div className="text-yellow-400 font-semibold">
                    Enviando...
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="relative bg-gray-800/50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <ImageIcon className="h-6 w-6 text-green-400" />
                  <span className="text-white font-semibold">Imagem carregada</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={removeImage}
                  className="text-red-400 border-red-400 hover:bg-red-400/10"
                >
                  <X className="h-4 w-4 mr-1" />
                  Remover
                </Button>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src={uploadedImage}
                  alt="Uploaded preview"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
