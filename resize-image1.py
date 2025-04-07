import cv2
import numpy as np
from PIL import Image, ImageDraw

def crop_and_round_corners(image_path, output_path, target_height=300, border_radius=21):
    # Load ảnh gốc
    img = Image.open(image_path)

    # Tính toán kích thước phù hợp
    width, height = img.size

    # Nếu chiều cao ảnh lớn hơn 300px, cắt ảnh ở giữa
    if height > target_height:
        top = (height - target_height) // 2
        bottom = top + target_height
        img = img.crop((0, top, width, bottom))  # Cắt phần giữa ảnh

    # Tạo mặt nạ bo góc
    mask = Image.new("L", img.size, 255)
    draw = ImageDraw.Draw(mask)

    # Bo góc trên
    draw.pieslice([0, 0, border_radius * 2, border_radius * 2], 180, 270, fill=0)
    draw.pieslice([width - border_radius * 2, 0, width, border_radius * 2], 270, 360, fill=0)

    # Áp dụng mặt nạ lên ảnh
    img.putalpha(mask)

    # Lưu ảnh kết quả
    img.save(output_path, format="PNG")

# 📌 Sử dụng script

input_image = "/Users/cothang/Documents/WorkPlace/CV/link-in-bio/src/images/link-in-bio-example-1.png"   # Đường dẫn ảnh gốc
output_image = "/Users/cothang/Documents/WorkPlace/CV/link-in-bio/src/images/link-in-bio-example-1.png" # Đường dẫn ảnh sau khi cắt
crop_and_round_corners(input_image, output_image)

print(f"✅ Ảnh đã được cắt và lưu tại: {output_image}")
