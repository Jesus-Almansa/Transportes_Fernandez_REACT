import glob
import os
from PIL import Image

# Define the input and output directories
input_directory = "transportes-fernandez/src/assets/ToEdit/*"  # This will select all images in the folder
output_directory = "transportes-fernandez/src/assets/images"

# Create output directory if it doesn't exist
os.makedirs(output_directory, exist_ok=True)

# Load all images from the input directory
image_paths = glob.glob(input_directory)

# Filter for common image formats
valid_extensions = ['.jpg', '.jpeg', '.png']
image_paths = [path for path in image_paths if os.path.splitext(path)[1].lower() in valid_extensions]

# Check if there are any valid images
if not image_paths:
    print("No valid images found in the specified directory.")
else:
    # Ask the user for the desired resolution
    width = int(input("Enter the desired width: "))
    height = int(input("Enter the desired height: "))
    desired_resolution = (width, height)

    # Resize all images to the specified resolution and save them
    for image_path in image_paths:
        # Create output file path
        image_name = os.path.basename(image_path)
        output_path = os.path.join(output_directory, f"{image_name}")

        # Check if the resized image already exists
        if os.path.exists(output_path):
            print(f"Image {output_path} already exists. Skipping...")
            continue

        # Open the image
        image = Image.open(image_path)
        
        # Resize the image
        image_resized = image.resize(desired_resolution, Image.Resampling.LANCZOS)
        
        # Save resized image
        image_resized.save(output_path)
        print(f"Image saved to {output_path}")