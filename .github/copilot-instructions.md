# Copilot Repository Instructions

## Global Frontend Standards

- Dự án dùng Typescript.
- UI bắt buộc dùng: TailwindCSS + Ant Design + FontAwesome.
- Không tự tạo docs file.

## API rule

- Khi call API luôn tạo loading state.
- Khi call API phải dùng toastjs (react-hot-toast) cho success & error message.
- Không silent error.

## UI rule

- Các component mới phải responsive.
- Luôn ưu tiên component tách rời / pure component / re-usable.
- Ưu tiên tailwind cho layout, spacing, responsive.
- AntD dùng cho form, input, button, modal, table.

## Code Style

- Không viết any.
- Tất cả component phải export dạng function component.
- Mọi API util phải common theo 1 pattern `useApi()` hook.
- Cố gắng giữ code nhỏ / rõ ràng / module based.

## Khi sinh code mới

- Next: tạo component trong `app/(feature)/componentName` hoặc `components/`.
- React: tạo component trong `src/components/`.
- Nếu gọi API => luôn auto thêm loading + toast + try/catch.
- Tự động dùng màu brand: sử dụng class `text-brand`, `bg-brand/xx`, colorPrimary config của AntD = var(--brand).

## Output Format Expectation

- Copilot khi generate code phải viết trực tiếp component hoàn chỉnh.
- Không viết pseudocode.
- Không viết docs.
