import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import { Upload as UploadIcon, FileText, CheckCircle, AlertCircle } from "lucide-react";

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(prev => [...prev, ...selectedFiles]);
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    // Placeholder - will be connected to Supabase Storage
    setTimeout(() => {
      setUploadedFiles(files.map(file => file.name));
      setFiles([]);
      setUploading(false);
    }, 2000);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navbar />
      
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Upload Insurance Documents
            </h1>
            <p className="text-xl text-muted-foreground">
              Upload your insurance policies for comprehensive analysis
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="border-none bg-gradient-card shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UploadIcon className="h-6 w-6 text-primary" />
                  <span>Upload Documents</span>
                </CardTitle>
                <CardDescription>
                  Supported formats: PDF, DOC, DOCX (Max 10MB per file)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <UploadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <div className="space-y-2">
                    <Label htmlFor="file-upload" className="cursor-pointer">
                      <span className="text-primary font-medium">Click to upload</span> or drag and drop
                    </Label>
                    <Input
                      id="file-upload"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <p className="text-sm text-muted-foreground">
                      PDF, DOC, or DOCX files up to 10MB
                    </p>
                  </div>
                </div>

                {files.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-medium text-foreground">Selected Files:</h3>
                    {files.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center space-x-3">
                          <FileText className="h-5 w-5 text-primary" />
                          <div>
                            <p className="text-sm font-medium text-foreground">{file.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFile(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                    <Button
                      variant="hero"
                      onClick={handleUpload}
                      disabled={uploading}
                      className="w-full"
                    >
                      {uploading ? "Uploading..." : "Upload Files"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Upload Status */}
            <Card className="border-none bg-gradient-card shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-accent" />
                  <span>Upload Status</span>
                </CardTitle>
                <CardDescription>
                  Track your uploaded documents and analysis progress
                </CardDescription>
              </CardHeader>
              <CardContent>
                {uploadedFiles.length > 0 ? (
                  <div className="space-y-3">
                    {uploadedFiles.map((fileName, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-accent/10 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-accent" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{fileName}</p>
                          <p className="text-xs text-muted-foreground">Successfully uploaded</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">No files uploaded yet</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Instructions */}
          <Card className="mt-8 border-none bg-muted/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-6 w-6 text-primary" />
                <span>Upload Guidelines</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Supported Documents</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Life insurance policies</li>
                    <li>• Health insurance documents</li>
                    <li>• Auto insurance policies</li>
                    <li>• Home/renters insurance</li>
                    <li>• Disability insurance</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Best Practices</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ensure documents are clear and readable</li>
                    <li>• Include all policy pages</li>
                    <li>• Upload current policy declarations</li>
                    <li>• Keep file sizes under 10MB</li>
                    <li>• Use descriptive file names</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              Connect to Supabase to enable secure document storage and automatic analysis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;