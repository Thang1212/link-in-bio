import cv2
import numpy as np
from PIL import Image, ImageDraw


def crop_and_round_corners(image_path, output_path, target_height=300, border_radius=21):
	# Load ảnh gốc
	img = Image.open(image_path)
	#img = Image.open("/Users/cothang/Documents/WorkPlace/CV/link-in-bio/src/images/link-in-bio-example-1.png")

	# Tính toán tỷ lệ để resize chiều cao về 300px
	width_percent = target_height / float(img.size[1])
	target_width = int((float(img.size[0]) * float(width_percent)))

	# Resize ảnh (giữ tỷ lệ gốc)
	img = img.resize((target_width, target_height), Image.LANCZOS)

	# Tạo mặt nạ bo góc
	mask = Image.new("L", (target_width, target_height), 0)
	draw = ImageDraw.Draw(mask)

	# Vẽ hình chữ nhật với góc bo tròn
	draw.rectangle((0, 0, target_width, target_height), fill=255)
	draw.pieslice([0, 0, border_radius*2, border_radius*2], 180, 270, fill=0)
	draw.pieslice([target_width-border_radius*2, 0, target_width, border_radius*2], 270, 360, fill=0)

	# Áp dụng mặt nạ lên ảnh
	img.putalpha(mask)

	# Lưu ảnh kết quả
	img.save(output_path, format="PNG")

# 📌 Sử dụng hàm
input_image = "/Users/cothang/Documents/WorkPlace/CV/link-in-bio/src/images/link-in-bio-example-2.png"   # Đường dẫn ảnh gốc
output_image = "/Users/cothang/Documents/WorkPlace/CV/link-in-bio/src/images/link-in-bio-example-2.png" # Đường dẫn ảnh sau khi cắt

crop_and_round_corners(input_image, output_image)
print(f"✅ Ảnh đã được cắt và lưu tại: {output_image}")
