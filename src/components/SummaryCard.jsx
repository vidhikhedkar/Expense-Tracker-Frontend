import React from "react";
import { Card, Progress, Tag } from "antd";
import {
  WalletOutlined,
  RiseOutlined,
} from "@ant-design/icons";

const SummaryCard = ({ summary }) => {
  const categories = summary.byCategory
    ? Object.entries(summary.byCategory)
    : [];

  const total = summary.totalExpense || 0;

  return (
    <Card
      bordered={false}
      className="rounded-3xl shadow-2xl overflow-hidden"
      bodyStyle={{
        padding: 0,
      }}
    >
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <p className="uppercase tracking-widest text-sm opacity-80">
              Monthly Expense
            </p>

            <h1 className="text-5xl font-bold mt-3">
              ₹{total.toLocaleString()}
            </h1>

            <p className="mt-2 opacity-80">
              Total spending this month
            </p>
          </div>

          <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center">
            <WalletOutlined style={{ fontSize: 30 }} />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="p-7">
        <div className="flex items-center gap-2 mb-6">
          <RiseOutlined className="text-indigo-600 text-xl" />
          <h2 className="text-xl font-bold">
            Category Breakdown
          </h2>
        </div>

        {categories.length === 0 ? (
          <div className="text-center py-10 text-slate-400">
            No expense data available.
          </div>
        ) : (
          <div className="space-y-6">
            {categories.map(([category, amount]) => {
              const percent =
                total > 0
                  ? Math.round((amount / total) * 100)
                  : 0;

              return (
                <div key={category}>
                  <div className="flex justify-between mb-2">
                    <Tag
                      color="blue"
                      className="px-3 py-1 rounded-full"
                    >
                      {category}
                    </Tag>

                    <div className="font-semibold">
                      ₹{amount}
                    </div>
                  </div>

                  <Progress
                    percent={percent}
                    strokeColor="#6366f1"
                    showInfo={false}
                  />

                  <div className="text-right text-gray-500 text-sm">
                    {percent}% of total
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Card>
  );
};

export default SummaryCard;